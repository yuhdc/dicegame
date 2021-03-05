// import { FETCH_BET_PAWN } from "../constant";

import { AGAIN, PLAY, RAISE } from "../constant";

let initialStates = {
  danhSachCuoc: [
    { score: 0, name: "nai", img: "./asset/nai.png" },
    { score: 0, name: "bau", img: "./asset/bau.png" },
    { score: 0, name: "ga", img: "./asset/ga.png" },
    { score: 0, name: "ca", img: "./asset/ca.png" },
    { score: 0, name: "cua", img: "./asset/cua.png" },
    { score: 0, name: "tom", img: "./asset/tom.png" },
  ],
  tongDiem: 1000,
  diceSet: [
    { name: "nai", img: "./asset/nai.png" },
    { name: "bau", img: "./asset/bau.png" },
    { name: "ga", img: "./asset/ga.png" },
    { name: "ca", img: "./asset/ca.png" },
    { name: "cua", img: "./asset/cua.png" },
    { name: "tom", img: "./asset/tom.png" },
  ],
};

export default function GameBauCuaReducer(
  state = initialStates,
  { type, payload }
) {
  switch (type) {
    case RAISE:
      const danhSachCuocUpdate = [...state.danhSachCuoc];
      const index = danhSachCuocUpdate.findIndex(
        (qc) => qc.name === payload.pawn?.name
      );
      if (index !== -1) {
        if (payload.tangGiam && state.tongDiem >= 100) {
          danhSachCuocUpdate[index].score += 100;
          state.tongDiem -= 100;
        } else if (danhSachCuocUpdate[index].score >= 100) {
          danhSachCuocUpdate[index].score -= 100;
          state.tongDiem += 100;
        }
      }
      state.danhSachCuoc = danhSachCuocUpdate;
      return { ...state };
    case PLAY:
      const randomDiceSet = [];
      for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * 6);
        const randomDice = state.danhSachCuoc[random];
        randomDiceSet.push(randomDice);
      }
      state.diceSet = randomDiceSet;
      // xu ly tang diem thuong
      randomDiceSet.forEach((dice) => {
        let index = state.danhSachCuoc.findIndex(
          (item) => item.name === dice.name
        );
        state.tongDiem += state.danhSachCuoc[index].score;
      });

      //xu ly hoan tien
      state.danhSachCuoc.forEach((dice) => {
        let index = randomDiceSet.findIndex((item) => item.name === dice.name);
        if (index !== -1) {
          state.tongDiem += dice.score;
        }
      });
      //xu ly lam moi game
      state.danhSachCuoc = state.danhSachCuoc.map((item, index) => {
        return { ...item, score: 0 };
      });
      return { ...state };
    case AGAIN:
      window.location.reload();
      break;
    default:
      return state;
  }
}
