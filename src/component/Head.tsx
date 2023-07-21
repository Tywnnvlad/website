import { useState } from "react";
import {
  AppShell,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  SimpleGrid,
  Button,
  Image,
} from "@mantine/core";

import giantslogo from "../assets/giantslogo.png";
import giantstitle from "../assets/giantstitle.png";

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      //   navbarOffsetBreakpoint="sm"
      //   asideOffsetBreakpoint="sm"
      //   navbar={
      //     <Navbar
      //       p="md"
      //       hiddenBreakpoint="sm"
      //       hidden={!opened}
      //       width={{ sm: 200, lg: 300 }}
      //     >
      //       <Text>Application navbar</Text>
      //     </Navbar>
      //   }
      //   aside={
      //     <MediaQuery
      //       smallerThan="sm"
      //       styles={{ display: "none" }}
      //     >
      //       <Aside
      //         p="md"
      //         hiddenBreakpoint="sm"
      //         width={{ sm: 200, lg: 300 }}
      //       >
      //         <Text>Application sidebar</Text>
      //       </Aside>
      //     </MediaQuery>
      //   }
      //   footer={
      //     <Footer
      //       height={60}
      //       p="md"
      //     >
      //       Application footer
      //     </Footer>
      //   }
      header={
        <Header
          height={{ base: 50, md: 60 }}
          p="md"
          style={{
            background: theme.colors.blue[5],
            border: "0px",
          }}
        >
          <div
            style={{
              margin: 0,
              padding: 0,
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <MediaQuery
              largerThan="sm"
              styles={{ display: "none" }}
            >
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <SimpleGrid
              cols={2}
              spacing={0}
              style={{
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <Image
                src={giantslogo}
                width="3.5rem"
                fit="scale-down"
              />
              <Image
                src={giantstitle}
                width="7rem"
                fit="scale-down"
              />
            </SimpleGrid>

            {/* <Text>Application header</Text> */}
            <SimpleGrid cols={5}>
              <Button>About Us</Button>
              <Button>Schedule</Button>
              <Button>Location</Button>
              <Button>Image</Button>
              <Button>Contact Us</Button>
            </SimpleGrid>
          </div>
        </Header>
      }
    >
      {/* <Text>Resize app to see responsive navbar in action</Text> */}
    </AppShell>
  );
}
