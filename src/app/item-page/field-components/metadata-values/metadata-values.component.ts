import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MetadataValue } from '../../../core/shared/metadata.models';
import { APP_CONFIG, AppConfig } from '../../../../config/app-config.interface';
import { BrowseDefinition } from '../../../core/shared/browse-definition.model';
import { hasValue } from '../../../shared/empty.util';
import { VALUE_LIST_BROWSE_DEFINITION } from '../../../core/shared/value-list-browse-definition.resource-type';
import { environment } from '../../../../environments/environment';

/**
 * This component renders the configured 'values' into the ds-metadata-field-wrapper component.
 * It puts the given 'separator' between each two values.
 */
@Component({
  selector: 'ds-metadata-values',
  styleUrls: ['./metadata-values.component.scss'],
  templateUrl: './metadata-values.component.html'
})
export class MetadataValuesComponent implements OnChanges {

  constructor(
    @Inject(APP_CONFIG) private appConfig: AppConfig,
  ) {
  }

  /**
   * The metadata values to display
   */
  @Input() mdValues: MetadataValue[];

  /**
   * The seperator used to split the metadata values (can contain HTML)
   */
  @Input() separator: string;

  /**
   * The label for this iteration of metadata values
   */
  @Input() label: string;

  /**
   * Whether the {@link MarkdownPipe} should be used to render these metadata values.
   * This will only have effect if {@link MarkdownConfig#enabled} is true.
   * Mathjax will only be rendered if {@link MarkdownConfig#mathjax} is true.
   */
  @Input() enableMarkdown = false;

  /**
   * Whether any valid HTTP(S) URL should be rendered as a link
   */
  @Input() urlRegex?;

  /**
   * This variable will be true if both {@link environment.markdown.enabled} and {@link enableMarkdown} are true.
   */
  renderMarkdown;

  @Input() browseDefinition?: BrowseDefinition;

  ngOnChanges(changes: SimpleChanges): void {
    this.renderMarkdown = !!this.appConfig.markdown.enabled && this.enableMarkdown;
  }

  /**
   * Does this metadata value have a configured link to a browse definition?
   */
  hasBrowseDefinition(): boolean {
    return hasValue(this.browseDefinition);
  }

  /**
   * Does this metadata value have a valid URL that should be rendered as a link?
   * @param value A MetadataValue being displayed
   */
  hasLink(value: MetadataValue): boolean {
    if (hasValue(this.urlRegex)) {
      const pattern = new RegExp(this.urlRegex);
      return pattern.test(value.value);
    }
    return false;
  }

  /**
   * Return a queryparams object for use in a link, with the key dependent on whether this browse
   * definition is metadata browse, or item browse
   * @param value the specific metadata value being linked
   */
  getQueryParams(value) {
    let queryParams = {startsWith: value};
    if (this.browseDefinition.getRenderType() === VALUE_LIST_BROWSE_DEFINITION.value) {
      return {value: value};
    }
    return queryParams;
  }

  /**
   * Checks if the given link value is an internal link.
   * @param linkValue - The link value to check.
   * @returns True if the link value starts with the base URL defined in the environment configuration, false otherwise.
   */
  hasInternalLink(linkValue: string): boolean {
    return linkValue.startsWith(environment.ui.baseUrl);
  }

  /**
   * This method performs a validation and determines the target of the url.
   * @returns - Returns the target url.
   */
  getLinkAttributes(urlValue: string): { target: string, rel: string } {
    if (this.hasInternalLink(urlValue)) {
      return { target: '_self', rel: '' };
    } else {
      return { target: '_blank', rel: 'noopener noreferrer' };
    }
  }
}
