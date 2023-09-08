
function getQuery() {
    const value = document.querySelector(".search__field").value
    localStorage.setItem("query", value);
    window.location.href = `${window.location.origin}/movies.html`
}