import NavbarItem from "./NavbarItem";


function Navbar() {
  return (
      <div className="flex justify-center gap-4 dark:bg-gray-600 bg-amber-100 p-6 lg:text-lg rounded">
          <NavbarItem title="Trending" param="fetchTrending" />
          <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default Navbar;