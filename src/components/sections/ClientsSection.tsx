import Image from "next/image";
import { clients } from "@/data/clients";

export default function ClientsSection() {
  // Duplicate for seamless infinite scroll
  const doubled = [...clients, ...clients];

  return (
    <section className="gg-cc-section">
      <h1 className="gg-cc-title">Our Clients</h1>
      <div className="gg-cc-shell">
        <div className="gg-cc-viewport">
          <div className="gg-cc-track">
            {doubled.map((client, i) => (
              <a
                key={`${client.name}-${i}`}
                className="gg-cc-card"
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                title={client.name}
              >
                <div className="gg-cc-avatar">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={140}
                    height={64}
                    style={{ objectFit: "contain" }}
                    draggable={false}
                  />
                </div>
                <h3 className="gg-cc-title-3">{client.name}</h3>
                <p className="gg-cc-sub">{client.category}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
