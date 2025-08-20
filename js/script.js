const current = location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === current) {
    link.style.color = "#ffcc00";
  }
});
// ==== TESTIMONIAL FILTERS ====
 // Filtering logic (keeps previous behaviour)
    const buttons = document.querySelectorAll('.filter-btn');
    const masonry = document.getElementById('masonry');
    const noResults = document.getElementById('noResults');

    function getCards() { return Array.from(masonry.querySelectorAll('.card')); }

    function applyFilter(filter){
      buttons.forEach(b => {
        const active = b.dataset.filter === filter;
        b.classList.toggle('active', active);
        b.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      let shown = 0;
      const cards = getCards();
      cards.forEach((card, i) => {
        const cat = card.dataset.category || '';
        if(filter === 'all' || cat === filter){
          card.style.display = 'inline-block';
          card.style.animationDelay = (i * 45) + 'ms';
          shown++;
        } else {
          card.style.display = 'none';
        }
      });
      noResults.style.display = shown ? 'none' : 'block';
    }

    buttons.forEach(btn => btn.addEventListener('click', () => applyFilter(btn.dataset.filter)));
    // keyboard support
    buttons.forEach(btn => btn.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); applyFilter(btn.dataset.filter); } }));

    // init
    applyFilter('all');

    // Video modal logic (same as before)
    const modal = document.getElementById('videoModal');
    const playerWrapper = document.getElementById('playerWrapper');
    const closeModalBtn = document.getElementById('closeModalBtn');

    function openVideo(url){
      const iframe = document.createElement('iframe');
      iframe.src = url + '?autoplay=1';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      playerWrapper.innerHTML = '';
      playerWrapper.appendChild(iframe);
      modal.classList.add('open');
      modal.setAttribute('aria-hidden','false');
    }

    function closeVideo(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); playerWrapper.innerHTML = ''; }

    document.addEventListener('click', (e) => {
      const card = e.target.closest('.card');
      if(!card) return;
      if(card.classList.contains('video') && card.dataset.video){
        openVideo(card.dataset.video);
      }
    });

    closeModalBtn.addEventListener('click', closeVideo);
    modal.addEventListener('click', (e) => { if(e.target === modal) closeVideo(); });
    document.addEventListener('keydown', (e) => { if(e.key === 'Escape' && modal.classList.contains('open')) closeVideo(); });

    // Audio recording + form submission + append to masonry
    let mediaRecorder = null;
    let audioChunks = [];
    let recordedBlob = null;

    const startBtn = document.getElementById('startRecord');
    const stopBtn = document.getElementById('stopRecord');
    const clearBtn = document.getElementById('clearAudio');
    const audioPlayback = document.getElementById('audioPlayback');

    startBtn.addEventListener('click', async () => {
      // request microphone permission and start recording
      if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
        alert('Audio recording not supported on this browser.');
        return;
      }
      try{
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];
        mediaRecorder.ondataavailable = e => { if(e.data && e.data.size) audioChunks.push(e.data); };
        mediaRecorder.onstop = () => {
          recordedBlob = new Blob(audioChunks, { type: audioChunks[0]?.type || 'audio/webm' });
          const url = URL.createObjectURL(recordedBlob);
          audioPlayback.src = url;
          audioPlayback.style.display = 'block';
        };
        mediaRecorder.start();
        startBtn.disabled = true;
        stopBtn.disabled = false;
        clearBtn.disabled = true;
      } catch(err){
        console.error(err);
        alert('Could not start recording — please allow microphone access.');
      }
    });

    stopBtn.addEventListener('click', () => {
      if(mediaRecorder && mediaRecorder.state !== 'inactive'){
        mediaRecorder.stop();
        // stop tracks to free mic
        mediaRecorder.stream && mediaRecorder.stream.getTracks().forEach(t => t.stop?.());
      }
      startBtn.disabled = false;
      stopBtn.disabled = true;
      clearBtn.disabled = false;
    });

    clearBtn.addEventListener('click', () => {
      recordedBlob = null;
      audioChunks = [];
      audioPlayback.src = '';
      audioPlayback.style.display = 'none';
      clearBtn.disabled = true;
    });

    // form handling
    const form = document.getElementById('feedbackForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (document.getElementById('name').value || 'Anonymous').trim();
      const category = document.getElementById('category').value || 'Other';
      const text = document.getElementById('textFeedback').value.trim();
      if(!text){
        alert('Please write your feedback.');
        return;
      }

      // create new card element
      const newCard = document.createElement('article');
      newCard.className = 'card';
      newCard.dataset.category = category;

      // apply 'video' class only if video (not used here). For audio, we show player inside.
      const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=E0F2FE&color=333&size=96`;

      newCard.innerHTML = `
        <div class="meta">
          <img class="avatar" src="${avatarUrl}" alt="${escapeHtml(name)} avatar">
          <div>
            <div class="who">${escapeHtml(name)}</div>
            <div class="badge">${escapeHtml(category)} • Visitor</div>
          </div>
          <div class="cat">${escapeHtml(category)}</div>
        </div>
        <p>${escapeHtml(text)}</p>
        <div class="footer"><div class="badge">Submitted</div><div class="muted">${new Date().toLocaleDateString()}</div></div>
      `;

      // if recorded audio exists, append audio player and label
      if(recordedBlob){
        const audioEl = document.createElement('audio');
        audioEl.controls = true;
        audioEl.className = 'audio-embedded';
        const audioUrl = URL.createObjectURL(recordedBlob);
        audioEl.src = audioUrl;
        audioEl.style.marginTop = '8px';
        newCard.appendChild(audioEl);

        // mark card visually as having audio (small badge)
        const b = newCard.querySelector('.footer .badge');
        if(b) b.textContent = 'Audio';
      }

      // append to masonry (prepend so newest on top)
      masonry.insertBefore(newCard, masonry.firstChild);

      // re-run filter so visibility matches current filter
      const activeBtn = document.querySelector('.filter-btn.active');
      const currentFilter = activeBtn ? activeBtn.dataset.filter : 'all';
      applyFilter(currentFilter);

      // reset form UI (keep recorded audio cleared after submit)
      form.reset();
      recordedBlob = null;
      audioChunks = [];
      audioPlayback.src = '';
      audioPlayback.style.display = 'none';
      clearBtn.disabled = true;
      startBtn.disabled = false;
      stopBtn.disabled = true;

      // small success cue
      alert('Thanks! Your feedback has been added to the wall.');
    });

    // helper to escape HTML in user input
    function escapeHtml(unsafe){
      return unsafe
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
    }

    // ensure animation delay for newly added cards is applied
    window.addEventListener('load', () => {
      getCards().forEach((c, i) => c.style.animationDelay = (i * 45) + 'ms');
    });

    // small utility used by applyFilter
    // (re-defined here to avoid reference error before function declared)
    function applyFilter(filter){
      buttons.forEach(b => {
        const active = b.dataset.filter === filter;
        b.classList.toggle('active', active);
        b.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      let shown = 0;
      const cards = getCards();
      cards.forEach((card, i) => {
        const cat = card.dataset.category || '';
        if(filter === 'all' || cat === filter){
          card.style.display = 'inline-block';
          card.style.animationDelay = (i * 45) + 'ms';
          shown++;
        } else {
          card.style.display = 'none';
        }
      });
      noResults.style.display = shown ? 'none' : 'block';
    }
