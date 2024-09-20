import { useEffect, useState } from 'react';

export default function StickySidebar() {
  const [isSticky, setIsSticky] = useState(false);
  const [sidebarTop, setSidebarTop] = useState(0);

  useEffect(() => {
    const sidebar = document.getElementById('sidebar-nav');

    // Set the initial position of the sidebar
    const initialSidebarTop = sidebar.offsetTop;
    setSidebarTop(initialSidebarTop);

    const handleScroll = () => {
      const windowScrollTop = window.scrollY;
      const contentHeight = document.getElementById('content').offsetHeight;

      // Determine if the sidebar should be sticky
      if (windowScrollTop >= contentHeight - sidebar.offsetHeight - 10) {
        setIsSticky(false);
      } else if (windowScrollTop >= initialSidebarTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        {/* Sidebar */}
        <ul
          id="sidebar-nav"
          className={`w-36 border border-gray-300 ${
            isSticky ? 'fixed top-5' : ''
          }`}
        >
          <li className="list-none border border-gray-300 m-2 p-1">
            <a href="#" className="text-black">
              Home
            </a>
          </li>
          <li className="list-none border border-gray-300 m-2 p-1">
            <a href="#" className="text-black">
              Blog
            </a>
          </li>
        </ul>

        {/* Content */}
        <div
          id="content"
          className="h-[2000px] w-[500px] p-2 border border-gray-300 ml-2"
        >
          Content in here, scroll down to see the sticky in action!
        </div>
      </div>
    </div>
  );
}
