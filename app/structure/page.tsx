import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col gap-20 py-20 px-20 h-[200vh]">
      <div>
        <h1 className="text-6xl font-semibold">Project Map</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-20">
        {/* Global Components Container */}

        <div className="flex flex-col gap-10 ">
          <h2 className="text-3xl font-bold">Global Components</h2>

          <div className="gap-5 flex flex-col">
            <ul>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Pre-loader</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>News-Letter / Join Community Pop up</li>
              </Link>
            </ul>
            <h3 className="text-xl font-bold">Nav Bar</h3>
            <ul>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Home</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Projects / Games</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Press Kit</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Careers</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Concept Arts / Fan Art Gallery</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Events / Awards / Testimonials</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Blogs / Updates / News / Patches</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>About</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Discord / Steam / Community</li>
              </Link>
            </ul>

            {/* Footer */}
            <h3 className="text-xl font-bold">Footer</h3>
            <ul>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>...</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Pages Container */}

        <div className="flex flex-col gap-10 ">
          <h2 className="text-3xl font-bold">Pages</h2>
          <div className="gap-5 flex flex-col">
            {/* Main Pages */}

            <h3 className="text-xl font-bold">Main Pages</h3>
            <ul>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Home</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Projects / Games</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Press Kit</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Careers</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Concept Arts / Fan Art Gallery</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>About</li>
              </Link>
              {/* Community Links */}
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Discord / Steam</li>
              </Link>
            </ul>

            {/* Sub Pages */}

            <h3 className="text-xl font-bold">Sub Pages</h3>
            <ul>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Individual Game Pages</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Individual Blogs/Updates/News/Patches Pages</li>
              </Link>
            </ul>

            {/* Legal Pages */}

            <h3 className="text-xl font-bold">Legal Pages</h3>
            <ul>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Privacy Policy Page</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Terms and Conditions</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Legal Page</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Cookies Policy</li>
              </Link>
              <p>More ... If related. (Need to check)</p>
            </ul>

            {/* Optional / Future Pages */}

            <h3 className="text-xl font-bold">Optional / Future Pages</h3>
            <ul>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Events / Awards / Testimonials</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Blogs / Updates / News / Patches</li>
              </Link>
              <Link
                href=""
                className="hover:underline hover:opacity-70 duration-1000"
              >
                <li>Store</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Color Pallets */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold">Color Pallet</h2>
          <ul>
            <Link
              href=""
              className="hover:underline hover:opacity-70 duration-1000"
            >
              <li>Pre-loader</li>
            </Link>
          </ul>
        </div>

        {/* Font-Families */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold">Font-Families</h2>
          <ul>
            <Link
              href=""
              className="hover:underline hover:opacity-70 duration-1000"
            >
              <li>Pre-loader</li>
            </Link>
          </ul>
        </div>
      </div>

      <div>
        {/* Home Page */}
        <div className="space-y-5">
          <Link
              href=""
              className="hover:underline hover:opacity-70 duration-1000"
            ><h2 className="text-3xl font-bold">Home page</h2></Link>
          <ul>
            
              <li>Hero Section</li>
              <li>Section 2</li>
              <li>Section 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default page;
