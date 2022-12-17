import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from "../Dashboard/index";


	function Navi() {
		const navigate = useNavigate();
				const logout = () => {
			//   sessionStorage.clear();
			  navigate('/Dashboard');
			  window.location.reload(true);
			}

	return (
		<div className={styles.main_container}>
			<div className={styles.user_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={"handleSubmit"}>
						<h2>ENTER USERNAME</h2>
						<input
							type="text"
							placeholder="Enter Your Name"
							required
							className={styles.input}
						/>
						<button type="submit"  className={styles.green_btn} onClick={logout}>DASHBOARD</button>
				
					</form>
				</div>
				
			</div>
		</div>
	);
};

export default Navi;