import React from "react";
import styles from "../Artist/Artist.module.css";
import SearchBar from "../../commons/SearchBar/SearchBar";
import SideBar from "../../commons/SideBar/SideBar";
import { ContainerLibrary } from "../../commons/ContainerLibrary/ContainerLibrary";
import SearchResults from "../SearchResults/SearchResults";
import { useSelector } from "react-redux";

const Library = () => {
  const searchString = useSelector((state: any) => state.query);

  return (
    <div className={styles.container}>
      <SearchBar />
      <SideBar />
      {!searchString ? <ContainerLibrary /> : <SearchResults />}
    </div>
  );
};
export default Library;
