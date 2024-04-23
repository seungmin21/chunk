/**
 * 1. chunk 예시 작성법 분석
 * 2. slice() 메서드 이해 확립
 */

function cuting(tree) {
  let chunk = [];

  // 전체 순환
  for (let i = 0; i < tree.length; i += 2) {
    // 자르기
    let child = tree.slice(i, i + 3);
    // 담기
    chunk.push(child);
  }
  return chunk;
}

let tree = "ABBABBC"

let treeChunk = cuting(tree);

for (let i = 0; i < treeChunk.length; i++) {
  console.log(`chunk ${i + 1}: ${treeChunk[i]}`);
}