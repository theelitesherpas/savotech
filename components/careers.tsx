import Link from "next/link";
import Reveal from "./reveal";
import { ROLES } from "@/lib/careers-data";

/** Homepage band pointing engineers and designers to the careers page. */
export default function Careers() {
  return (
    <section className="section section-light" id="careers">
      <div className="wrap">
        <Reveal>
          <div className="careers-box">
            <p className="page-kicker">Careers</p>
            <h2>Join the team that ships it.</h2>
            <p className="lead">
              Small senior teams, real products in healthcare, fintech and AI. Remote first in
              India, INR salaries, honest hiring in four steps. Six roles are open right now.
            </p>

            <div className="careers-roles">
              {ROLES.map((r) => (
                <Link key={r.title} className="careers-role" href="/careers/">
                  {r.title}
                </Link>
              ))}
            </div>

            <div className="careers-cta-row">
              <Link className="btn btn-primary btn-lg" href="/careers/">
                Explore careers
              </Link>
              <p className="est-fine">
                Applications are read by senior engineers, with a personal reply within two
                business days.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
