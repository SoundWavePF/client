import { useState } from "react";
import likefull from "../../../assets/likefull.png";
import s from "./FavoriteIcon.module.css";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreator from "../../../redux/actions/action_player";
import useAuth from "../../../utils/useAuth";

function FavoriteIcon(props: any) {
	 
	const dispatch = useDispatch();
	const [fav, setFav] = useState(0);
	const { updateLike, likeSong, dislikeSong } = bindActionCreators(
		actionCreator,
		dispatch
	);
	const { user } = useAuth();
	const email: string | undefined = user?.email;

	const likeSongUser = useSelector(
		(state: any) => state.library_artist.list.liked_songs
	);
	function like(item: any) {
		if (email) likeSong(item.id, email);
		let likeSongArr = likeSongUser;
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
