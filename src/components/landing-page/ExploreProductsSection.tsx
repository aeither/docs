import React from "react";
import ProductCard from "./ProductCard";

type Product = {
  image: string;
  name: string;
  description: string;
  link: string;
};

const products: Product[] = [
  {
    image: "/assets/product/contracts.png",
    name: "Prebuilt contracts",
    description: "Contract templates for common use-cases",
    link: "/pre-built-contracts",
  },
  {
    image: "/assets/product/sdk.png",
    name: "SDK",
    description:
      "Components and hooks to integrate smart contracts into your apps",
    link: "/sdk",
  },
  {
    image: "/assets/product/extensions.png",
    name: "Extensions",
    description: "Build and extend smart contracts using our Solidity SDK",
    link: "/extensions ",
  },
  {
    image: "/assets/product/release.png",
    name: "Release",
    description: "Publish your contracts to our on-chain contract registry",
    link: "/release",
  },
  {
    image: "/assets/product/deploy.png",
    name: "Deploy",
    description: "A seamless contract deployment framework",
    link: "/deploy",
  },
  {
    image: "/assets/product/auth.png",
    name: "Auth",
    description: "Easily integrate wallet-based login flows",
    link: "/auth",
  },
  {
    image: "/assets/product/dashboard.png",
    name: "Dashboard",
    description: "Easily analyze and manage your smart contracts",
    link: "/dashboard",
  },
];

export default function ExploreProductsSection() {
  return (
    <div className="explore-products-container">
      <h2 className="explore-products-heading" style={{ marginBottom: 12 }}>
        Explore Products
      </h2>

      <div className="row" style={{ marginBottom: 64 }}>
        {products.map((p, i) => (
          <div className="col col--4" key={i} style={{ padding: 8 }}>
            <ProductCard
              image={p.image}
              name={p.name}
              description={p.description}
              link={p.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
