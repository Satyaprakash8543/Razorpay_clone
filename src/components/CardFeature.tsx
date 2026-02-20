import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: string;
  href: string;
};

const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Payment Links",
    description:
      "Share payment links via email, SMS, messenger, or chatbots and get paid instantly.",
    icon: "/img/payment-linkarrow.svg",
    href: "#",
  },
  {
    id: 2,
    title: "Payments Page",
    description:
      "Take you store online instantly with zero coding. Accept international domestic payments.",
    icon: "/img/payment-pagesicon.svg",
    href: "#",
  },
    {
    id: 3,
    title: "Payments Buttons",
    description:
      "Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more.",
    icon: "/img/payment-button.svg",
    href: "#",
  },
    {
    id: 4,
    title: "Subscription",
    description:
      "Subscription plans with automated recurring transactions on various payments modes.",
    icon: "/img/payment-pagesicon.svg",
    href: "#",
  },
    {
    id: 5,
    title: "Route",
    description:
      "Split incoming payments automatically to vendor's accounts, manage marketplace money flow...",
    icon: "/img/payment-pagesicon.svg",
    href: "#",
  },
    {
    id: 6,
    title: "Smart Collect",
    description:
      "Automatically reconcile incoming NEFT, RTGS, IMPS, UPI Payments using Customer Identifiers & UPI-IDs",
    icon: "/img/payment-pagesicon.svg",
    href: "#",
  },
];

const FeatureCard = () => {
  return (
    <section className="w-full bg-white text-black">
      <div className="mx-auto max-w-7xl w-10/12 px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item) => (
            <div
              key={item.id}
              className="relative flex min-h-60 flex-col justify-between rounded-xl border p-6 transition-shadow hover:shadow-lg"
            >
              {/* Icon */}
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={20}
                  height={20}
                  priority={false}
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>

              {/* Link */}
              <Link
                href={item.href}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
              >
                Know more
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;

