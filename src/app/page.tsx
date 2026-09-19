import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">

          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}

          <RevealFx
            translateY="4"
            fillWidth
            horizontal="center"
            paddingBottom="16"
          >
            <Heading wrap="balance" variant="display-strong-l">
              NEXORA
            </Heading>
          </RevealFx>

          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            horizontal="center"
            paddingBottom="32"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            >
              Creative Digital Studio — Web, Video, Social Media & Design.
            </Text>
          </RevealFx>

          <RevealFx
            paddingTop="12"
            delay={0.4}
            horizontal="center"
            paddingLeft="12"
          >
            <Row gap="12">
              <Button
                href="/work"
                variant="primary"
                size="m"
                weight="default"
                arrowIcon
              >
                View Our Work
              </Button>

              <Button
                href="/about"
                variant="secondary"
                size="m"
                weight="default"
              >
                About NEXORA
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>

      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>

      <Column fillWidth gap="24" marginTop="xl">
        <Row fillWidth paddingRight="64">
          <Line maxWidth={48} />
        </Row>

        <Row fillWidth gap="24" s={{ direction: "column" }}>
          <Row flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-xs">
              Our Services
            </Heading>
          </Row>

          <Row flex={3} paddingX="20">
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="body-default-l"
            >
              Video Editing • Web Development • Social Media Marketing •
              Graphic Design
            </Text>
          </Row>
        </Row>

        <Row fillWidth paddingLeft="64" horizontal="end">
          <Line maxWidth={48} />
        </Row>
      </Column>

      <Projects range={[2]} />
    </Column>
  );
}
