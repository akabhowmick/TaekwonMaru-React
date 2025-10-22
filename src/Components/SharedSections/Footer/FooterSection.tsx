import "./Footer.css";
export const FooterSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="footer-section">
    <h4 className="text-white text-uppercase mb-4 font-weight-bold lg:text-xl 3xl:text-3xl">
      {title}
    </h4>
    {children}
  </div>
);
