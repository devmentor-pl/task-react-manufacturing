import { Logo } from "../Logo/Logo";
import {
  Address,
  Container,
  Contact,
  SocialItems,
  FooterItems,
  Text,
  Wrapper,
  Link,
} from "./Footer.styled";
import FACEBOOK_ICON from "../../assets/facebook.svg";
import TWITTER_ICON from "../../assets/xTwitter.svg";
import INSTAGRAM_ICON from "../../assets/instagram.svg";
import GITHUB_ICON from "../../assets/github.svg";
import { Section } from "../Section/Section";
import { footerMenu } from "../../constants/footerMenu";

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterItems>
          <Logo showHamburger={false} />
          <Address>
            <Text>9876 River Drive, Warsaw, CA 9622 Poland</Text>
            <div>
              <Contact href="mailto:shop@wearhouse.com">
                sale@wearhouse.com
              </Contact>
            </div>
            <div>
              <Contact href="tel:+12345678901">+12 345-678-901</Contact>
            </div>
            <SocialItems>
              <li>
                <Link href="facebook.com">
                  <img src={FACEBOOK_ICON} alt="facebook link" />
                </Link>
              </li>
              <li>
                <Link href="x.com">
                  <img src={TWITTER_ICON} alt="twitter link" />
                </Link>
              </li>
              <li>
                <Link href="instagram.com">
                  <img src={INSTAGRAM_ICON} alt="instagram link" />
                </Link>
              </li>
              <li>
                <Link href="github.com">
                  <img src={GITHUB_ICON} alt="github link" />
                </Link>
              </li>
            </SocialItems>
          </Address>
        </FooterItems>
        {footerMenu.map((part, index) => (
          <Section key={index} menu={part} />
        ))}
      </Container>
    </Wrapper>
  );
};
