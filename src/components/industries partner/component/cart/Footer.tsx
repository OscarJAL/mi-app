export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#ff5100] flex items-center justify-center">
              <span className="text-white font-bold text-lg">t</span>
            </div>
            <span className="font-semibold">Tudelü</span>
          </div>
          <p className="text-sm text-gray-600">
            Tudelü makes The Staten... (texto demo, cámbialo por el real).
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Our Industry</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Industries We Partner With</li>
            <li>Commercial</li>
            <li>Residential</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Partition Walls</li>
            <li>Canopies</li>
            <li>Pergolas</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Office</h3>
          <p className="text-sm text-gray-600">
            100 Industrial Avenue
            <br />
            Kearny, NJ
          </p>
        </div>
      </div>
    </footer>
  );
};
