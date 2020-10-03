const navBtn = document.querySelector(".nav-bar-icon");
navBtn.addEventListener("click", () => {
	const sideBar = document.querySelector(".side-bar");
	if (sideBar.classList.contains("active")) {
		sideBar.classList.remove("active");
		sideBar.style.left = "-300px";
	} else {
		sideBar.style.left = "0px";
		sideBar.classList.add("active");
	}
});

const uploadBtn = document.querySelector(".nav-bar-upload");
uploadBtn.addEventListener("click", () => {
	const modalShow = document.querySelector(".modal-upload");
	const closeBtn = document.querySelector(".cross-btn");
	// console.log(modalShow);
	if (
		modalShow.classList.contains("scale-up") ||
		modalShow.classList.contains("scale-down")
	) {
		modalShow.classList.remove("scale-down");
		modalShow.classList.remove("scale-up");
	}

	modalShow.style.display = "block";
	modalShow.classList.add("show");
	modalShow.classList.add("scale-up");
	closeModal(closeBtn, modalShow);
});

const closeModal = (closeBtn, modalShow) => {
	closeBtn.addEventListener("click", () => {
		modalShow.classList.add("scale-down");
		setTimeout(() => {
			modalShow.style.display = "none";
		}, 500);
	});
};
