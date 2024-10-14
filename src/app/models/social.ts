import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithubSquare, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

export interface ISocialItem {
  baseLink: string;
  icon: IconDefinition;
  type: string;
  username: string;
  readonly link: string;
}

class SocialItem implements ISocialItem {
  baseLink: string;
  icon: IconDefinition;
  type: string;
  username: string;
  constructor(baseLink: string, icon: IconDefinition, type: string, username: string) {
    this.baseLink = baseLink;
    this.icon = icon
    this.type = type;
    this.username = username;
  }

  get link(): string {
    return this.baseLink + this.username;
  }
}

export abstract class Social {
    static readonly SOCIALS: ISocialItem[] = [
      new SocialItem('https://linkedin.com/in/', faLinkedin, 'LinkedIn', 'wesleymontserrat'),
      new SocialItem('https://github.com/', faGithubSquare, 'GitHub', 'wesleyem'),
      new SocialItem('https://x.com/', faSquareXTwitter, 'X', 'spo0f_')
    ];

    static getSocialByType(type: string): ISocialItem | undefined {
      return Social.SOCIALS.find(item => item.type.toLowerCase() == type.toLowerCase());
    }
}
