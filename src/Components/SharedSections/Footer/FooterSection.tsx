export const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h4 className="text-white text-uppercase mb-4 font-weight-bold 3xl:text-3xl">{title}</h4>
    {children}
  </div>
);