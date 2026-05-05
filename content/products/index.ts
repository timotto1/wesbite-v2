import type { ProductPageData } from "@/lib/types";
import { listings } from "./listings";
import { residentPortal } from "./resident-portal";
import { comms } from "./comms";
import { compliance } from "./compliance";
import { finance } from "./finance";
import { aftersales } from "./aftersales";

export const products: Record<string, ProductPageData> = {
  listings,
  "resident-portal": residentPortal,
  comms,
  compliance,
  finance,
  aftersales,
};

export const productSlugs = Object.keys(products);
