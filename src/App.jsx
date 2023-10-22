import React, { useState } from "react";
import NavbarComponent from "./komponen/navbar";
import AboutPage from "./page/About";
import HomePage from "./page/homepage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk mengubah halaman yang aktif
  const changePage = (page) => {
    setCurrentPage(page);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <body className="">
      <div className="absolute top-0">
        <NavbarComponent
          currentPage={currentPage}
          changePage={changePage}
          isMenuOpen={isMenuOpen} // Kaitkan prop isMenuOpen
          toggleMenu={toggleMenu}
        />
      </div>
      <div className=" mt-24 xl:px-0 sm:px-0">
        {currentPage === "home" && <HomePage />}
        {currentPage === "about" && <AboutPage />}
        {/* Tambahkan kondisi dan komponen halaman lain di sini jika diperlukan */}
      </div>
    </body>
  );
}
