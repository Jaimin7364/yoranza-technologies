// ✅ This will be a server component (NO "use client")

import ServiceScreenWrapper from "@/screens/ServiceScreenWrapper";

export const metadata = {
  title: "Services | Yoranza Technologies",
  description: "Explore services offered by Yoranza.",
  // icons: {
  //   icon: '/assets/images/logo.png', // path should be relative to public
  // },
};

export default function ServicesPage() {
  return <ServiceScreenWrapper />;
}
