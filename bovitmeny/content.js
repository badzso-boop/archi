let isVisible = false;
let overlay = null;
let searchInput = null;
let resultsDiv = null;

function createOverlay() {
  overlay = document.createElement('div');
  overlay.id = 'archi-helper-overlay';
  overlay.className = 'hidden';

  searchInput = document.createElement('input');
  searchInput.id = 'archi-helper-search';
  searchInput.type = 'text';
  searchInput.placeholder = 'Keresés...';
  
  resultsDiv = document.createElement('div');
  resultsDiv.id = 'archi-helper-results';

  overlay.appendChild(searchInput);
  overlay.appendChild(resultsDiv);
  document.body.appendChild(overlay);

  searchInput.addEventListener('input', (e) => {
    performSearch(e.target.value);
  });
}

function performSearch(query) {
  resultsDiv.innerHTML = '';
  if (!query) {
    renderResults(QUESTION_DATA); // Show all if empty or maybe show nothing? Let's show all.
    return;
  }

  const lowerQuery = query.toLowerCase();
  const filtered = QUESTION_DATA.filter(item => {
    return (item.question && item.question.toLowerCase().includes(lowerQuery)) ||
           (item.answer && item.answer.toLowerCase().includes(lowerQuery));
  });

  renderResults(filtered);
}

function renderResults(items) {
  if (items.length === 0) {
    resultsDiv.innerHTML = '<div style="padding:10px; text-align:center;">Nincs találat.</div>';
    return;
  }

  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'archi-question-item';

    const title = document.createElement('div');
    title.className = 'archi-question-title';
    title.textContent = item.question;

    const freq = document.createElement('div');
    freq.className = 'archi-question-freq';
    freq.textContent = item.frequency ? `(${item.frequency})` : '';

    const answer = document.createElement('div');
    answer.className = 'archi-question-answer';
    answer.innerHTML = item.answer; // Using innerHTML because we added <br> tags in parser

    div.appendChild(title);
    div.appendChild(freq);
    div.appendChild(answer);
    resultsDiv.appendChild(div);
  });
}

function toggleOverlay() {
  if (!overlay) {
    createOverlay();
    performSearch(''); // Initialize with all data
  }

  isVisible = !isVisible;
  if (isVisible) {
    overlay.classList.remove('hidden');
    searchInput.focus();
  } else {
    overlay.classList.add('hidden');
  }
}

window.addEventListener('keydown', (e) => {
  // Toggle with Ctrl + Shift + K
  if (e.ctrlKey && e.shiftKey && (e.key === 'k' || e.key === 'K')) {
    e.preventDefault(); // Prevent default browser action if any
    toggleOverlay();
  }

  // Close with Esc if visible
  if (isVisible && e.key === 'Escape') {
    e.preventDefault();
    toggleOverlay();
  }
});
