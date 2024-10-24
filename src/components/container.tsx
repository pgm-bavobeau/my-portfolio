export default function Container({ children, props = '', container = true }: Readonly<{ children: React.ReactNode; props?: string; container?: boolean }>) {
  return (
    <div className={`mx-auto ${container && 'container'} ${props}`}>
      {children}
    </div>
  );
}