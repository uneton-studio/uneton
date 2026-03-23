import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    linkBlocks: Schema.Attribute.Component<'shared.link-block', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'shared.button', true>;
    links: Schema.Attribute.Component<'shared.link', true>;
    logo: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    buttonType: Schema.Attribute.Enumeration<['primary', 'secondary']>;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedLinkBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_blocks';
  info: {
    displayName: 'LinkBlock';
  };
  attributes: {
    label: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero': BlocksHero;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared.button': SharedButton;
      'shared.link': SharedLink;
      'shared.link-block': SharedLinkBlock;
    }
  }
}
