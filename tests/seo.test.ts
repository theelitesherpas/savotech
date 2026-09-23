import { describe, expect, it } from "vitest";
import { pageMetadata } from "@/lib/seo";

describe("pageMetadata", () => {
  it("builds canonical, OG and Twitter metadata from one input", () => {
    const m = pageMetadata({
      title: "Web Development Services",
      description: "desc",
      path: "/services/web-development/",
    });
    expect(m).toMatchObject({
      title: "Web Development Services",
      description: "desc",
      alternates: { canonical: "/services/web-development/" },
      openGraph: {
        url: "/services/web-development/",
        title: "Web Development Services | Savo Technologies",
        description: "desc",
        type: "website",
      },
      twitter: { card: "summary_large_image" },
    });
  });

  it("supports a distinct social description and article type", () => {
    const m = pageMetadata({
      title: "T",
      description: "long meta description",
      path: "/resources/x/",
      type: "article",
      ogDescription: "short social copy",
    });
    expect(m).toMatchObject({
      description: "long meta description",
      openGraph: { description: "short social copy", type: "article" },
    });
  });
});
