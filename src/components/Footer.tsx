import { Row, IconButton, SmartLink, Text, Column } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row
      as="footer"
      fillWidth
      padding="8"
      horizontal="center"
      s={{ direction: "column" }}
    >
      <Column
        className={styles.mobile}
        maxWidth="m"
        fillWidth
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="center"
        vertical="center"
      >
        <Column horizontal="center" gap="8">
          <Text variant="heading-default-m" onBackground="neutral-strong">
            NEXORA
          </Text>

          <Text variant="body-default-s" onBackground="neutral-weak">
            Creative Digital Studio
          </Text>

          <Text variant="body-default-s" onBackground="neutral-weak">
            📍 Nuapada, Odisha, India
          </Text>

          <Text variant="body-default-s" onBackground="neutral-weak">
            📞 <SmartLink href="tel:+919668331364">9668331364</SmartLink>
          </Text>

          <Text variant="body-default-s" onBackground="neutral-weak">
            ✉️ <SmartLink href={`mailto:${person.email}`}>{person.email}</SmartLink>
          </Text>
        </Column>

        <Row gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Row>

        <Text variant="body-default-s" onBackground="neutral-weak">
          © {currentYear} NEXORA. All rights reserved.
        </Text>
      </Column>

      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
