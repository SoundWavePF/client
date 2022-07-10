import React, { useState } from "react";
import likefull from "../../../assets/likefull.png";
import s from "./FavoriteIcon.module.css";
import { bindActionCreators } from "redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreator from "../../../redux/actions/action_player";

function FavoriteIcon(props: any) {
	// console.log(mar);
	const dispatch = useDispatch();
	const [fav, setFav] = useState(0);
	const { updateLike, likeSong, dislikeSong } = bindActionCreators(
		actionCreator,
		dispatch
	);
	const { user } = useAuth0();
	const email: string | undefined = user?.email;
	// const type = props.item.type;
	const likeSongUser = useSelector(
		(state: any) => state.library_artist.list.liked_songs
	);
	function like(item: any) {
		if (email) likeSong(item.id, email);
		const likeSongArr = likeSongUser;
		likeSongArr.push(item);
		updateLike(likeSongArr);
		setFav(likeSongArr.length);
	}
	function dislike(id: string) {
		if (email) dislikeSong(id, email);
		const likeSongArr = likeSongUser.filter((e: any) => e.id !== id);
		updateLike(likeSongArr);
		setFav(likeSongArr.length);
	}

	return (
			email ? (
				<button
					className={s.likeBtn}
					onClick={() =>
						likeSongUser?.find((e: any) => e.id === props.item?.id)
							? dislike(props.item.id)
							: like(props.item)
					}
				>
					{likeSongUser?.find((e: any) => e.id === props.item?.id) ? (
						<img
							className={s.likeImgInclude}
							src={likefull}
							alt="like button"
						/>
					) : (
						<img
							className={s.likeImg}
							src={likefull}
							alt="like button"
						/>
					)}
				</button>
			)
			: <></>
		
	);
}

export default FavoriteIcon;
