export default function Container({ children, props = '' }: Readonly<{ children: React.ReactNode; props?: string }>) {
  return (
    <div className={`mx-auto container ${props}`}>
      {children}
    </div>
  );
}