import React from "react";
import styles from "./Artist.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import { ArtistPage } from "../../commons/ArtistPage/ArtistPage";
import SearchResults from "../SearchResults/SearchResults";
import { useSelector } from "react-redux";

const Artist = () => {
  const searchString = useSelector((state: any) => state.query);
  return (
    <div className={styles.container}>
      <SearchBar />
      <SideBar />
      {!searchString ? <ArtistPage /> : <SearchResults />}
    </div>
  );
};
export default Artist;
