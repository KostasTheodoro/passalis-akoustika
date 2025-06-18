export default function Footer() {
  return (
    <footer className="bg-primary py-6">
      <div className="max-w-7xl mx-auto px-4 text-center text-white text-sm font-medium">
        © {new Date().getFullYear()} Passalis Hearing Aids. All rights reserved
      </div>
    </footer>
  );
}
