//your code here
const app = document.getElementById("app");
const issueList = document.getElementById("issue_list");
const pageNumber = document.getElementById("page_number");
const loadPrev = document.getElementById("load_prev");
const loadNext = document.getElementById("load_next");

let currentPage = 1;

const fetchIssues = (page) => {
  fetch(`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`)
    .then((response) => response.json())
    .then((data) => {
      // clear previous issues
      issueList.innerHTML = "";
      // update page number
      pageNumber.innerHTML = `Page number ${page}`;
      // populate issue list
      data.forEach((issue) => {
        const li = document.createElement("li");
        li.innerHTML = issue.title;
        issueList.appendChild(li);
      });
    });
};

loadPrev.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchIssues(currentPage);
  }
});

loadNext.addEventListener("click", () => {
  currentPage++;
  fetchIssues(currentPage);
});

// fetch issues for initial page load
fetchIssues(currentPage);

