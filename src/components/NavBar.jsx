import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
} from "@nextui-org/react";
import { AnchorIcon } from "./AnchorIcon.jsx";

export function NavBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">OPTIMIZACIÓN</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="/github-pages/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/github-pages/#/Charts">
            Charts
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            href="https://www.datos.gov.co/Ambiente-y-Desarrollo-Sostenible/Datos-Hidrometeorol-gicos-Crudos-Red-de-Estaciones/sbwg-7ju4/about_data"
            as={Link}
            color="primary"
            showAnchorIcon
            anchorIcon={<AnchorIcon />}
            variant="solid"
            className="text-white shadow-lg"
            style={{
              backgroundImage:
                "linear-gradient(to left, #f8721d, #d347ef, #5146e6)",
            }}
          >
            DataSet
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
