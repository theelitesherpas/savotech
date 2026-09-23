import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata, asset } from "@/lib/seo";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/components/json-ld";
import { notFound } from "next/navigation";
import Reveal from "@/components/reveal";
import { ARTICLES, getArticle, authorImg } from "@/lib/resources-data";
import Image from "next/image";


export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return pageMetadata({
    title: a.title,
    description: a.excerpt,
    path: `/resources/${a.slug}/`,
    type: "article",
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const more = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 2);
  return (
    <>
      <JsonLd data={articleSchema(a)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources/" },
        { name: a.title, path: `/resources/${a.slug}/` },
      ])} />
      <section className="section section-dark cs-hero res-article-hero">
        <div className="wrap wrap-narrow">
          <Reveal>
            <p className="page-kicker">
              <Link href="/resources/" className="text-cta">Resources</Link> / {a.cat}
            </p>
            <h1 className="res-article-h1">{a.title}</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="res-article-byline">
              <Image src={asset(authorImg(a.author))} alt="" aria-hidden="true" width={80} height={80} />
              <div>
                <strong>{a.author}</strong>
                <span>{a.role} · {a.date} · {a.time}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <article className="section section-light">
        <div className="wrap wrap-narrow res-article">
          <Reveal>
            <Image className="res-article-cover" src={asset(a.img)} alt="" aria-hidden="true" width={900} height={600} priority sizes="(max-width: 760px) 100vw, 720px" />
          </Reveal>
          {a.body.map((block, i) => (
            <Reveal key={i} delay={0.02 * i}>
              {block.h && <h2>{block.h}</h2>}
              {block.p && <p>{block.p}</p>}
              {block.li && (
                <ul className="res-article-list">
                  {block.li.map((item) => (
                    <li key={item.slice(0, 24)}>{item}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </article>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <Reveal><h2>Keep reading.</h2></Reveal>
          </div>
          <div className="res-grid">
            {more.map((m, i) => (
              <Reveal key={m.slug} delay={0.05 * i}>
                <Link className="res-card" href={`/resources/${m.slug}/`}>
                  <div className="res-card-media">
                    <Image src={asset(m.img)} alt="" aria-hidden="true" width={420} height={280} loading="lazy" sizes="(max-width: 700px) 100vw, 340px" />
                    <span className={`res-cat ${m.cat === "AI" ? "c-ai" : m.cat === "Design" ? "c-design" : m.cat === "Delivery" ? "c-delivery" : "c-eng"}`}>{m.cat}</span>
                  </div>
                  <div className="res-card-body">
                    <h3>{m.title}</h3>
                    <p>{m.excerpt}</p>
                    <span className="res-meta">{m.author} · {m.date} · {m.time}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
