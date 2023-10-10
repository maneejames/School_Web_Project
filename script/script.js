const wrapper1 = document.querySelector(".wrapper-1"),
        selectGoal = wrapper1.querySelector(".select-goal");

const wrapper2 = document.querySelector(".wrapper-2"),
        selectMission = wrapper2.querySelector(".select-mission");

selectGoal.addEventListener("click" , () => wrapper1.classList.toggle("active"));
selectMission.addEventListener("click" , () => wrapper2.classList.toggle("active"));

selectMission.addEventListener("click" , () => wrapper1.classList.toggle("inactive"));
selectGoal.addEventListener("click" , () => wrapper2.classList.toggle("inactive"));