"use strict";

const inputTextArea = document.getElementById("input");
const outputTextArea = document.getElementById("output");
const selectAllButton = document.getElementById("select");
const convertButton = document.getElementById("convert");
const resetButton = document.getElementById("reset");

// 出力された文章を全選択
if (selectAllButton) {
    selectAllButton.onclick = () => {
        outputTextArea.select();
    };
}

// 変換ボタンを押された時
if(convertButton){
    convertButton.onclick = () => {
        const input = inputTextArea.value;
        // 何らかの処理
        outputTextArea.value = input;
    }
}

// リセット
if(resetButton){
    resetButton.onclick = () => {
        outputTextArea.value = "ここに変換した文章が出力されるよ☆";
    }
}