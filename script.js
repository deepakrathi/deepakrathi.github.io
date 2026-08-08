/**
 * Android Trail — Site rendering logic.
 * Reads the APPS array from apps-data.js and renders the
 * home page grid and the individual app detail pages.
 * Nothing here needs to change when a new app is added.
 */

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str || "";
  return div.innerHTML;
}

function renderAppGrid(container) {
  if (!container) return;

  if (!APPS.length) {
    container.innerHTML = '<div class="empty-state">No apps published yet — check back soon.</div>';
    return;
  }

  container.innerHTML = APPS.map((app) => `
    <a class="app-card" href="app.html?id=${encodeURIComponent(app.id)}">
      <div class="top">
        <img class="app-icon" src="${escapeHtml(app.icon)}" alt="${escapeHtml(app.name)} icon" loading="lazy">
        <div>
          <h3>${escapeHtml(app.name)}</h3>
          <div class="cat">${escapeHtml(app.category)}</div>
        </div>
      </div>
      <p class="tagline">${escapeHtml(app.tagline)}</p>
      <span class="cta">View app →</span>
    </a>
  `).join("");
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function renderAppDetail(container) {
  if (!container) return;

  const id = getQueryParam("id");
  const app = APPS.find((a) => a.id === id);

  if (!app) {
    container.innerHTML = `
      <div class="page">
        <h1>App not found</h1>
        <p>We couldn't find that app. It may have been removed, or the link is incorrect.</p>
        <a class="btn btn-secondary" href="index.html">&larr; Back to all apps</a>
      </div>
    `;
    document.title = "App not found — Android Trail";
    return;
  }

  document.title = `${app.name} — Android Trail`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", app.tagline);

  const storeButtons = [];
  if (app.playStoreUrl) {
    storeButtons.push(`<a class="btn btn-primary" href="${escapeHtml(app.playStoreUrl)}" target="_blank" rel="noopener">Get it on Google Play</a>`);
  }
  if (app.appStoreUrl) {
    storeButtons.push(`<a class="btn btn-primary" href="${escapeHtml(app.appStoreUrl)}" target="_blank" rel="noopener">Download on the App Store</a>`);
  }
  if (app.privacyPolicyUrl) {
    storeButtons.push(`<a class="btn btn-secondary" href="${escapeHtml(app.privacyPolicyUrl)}" target="_blank" rel="noopener">Privacy Policy</a>`);
  }

  const screenshots = (app.screenshots || []).map((src) =>
    `<img src="${escapeHtml(src)}" alt="${escapeHtml(app.name)} screenshot" loading="lazy">`
  ).join("");

  container.innerHTML = `
    <div class="app-header">
      <img class="app-icon" src="${escapeHtml(app.icon)}" alt="${escapeHtml(app.name)} icon">
      <div class="meta">
        <h1>${escapeHtml(app.name)}</h1>
        <div class="cat">${escapeHtml(app.category)} · ${escapeHtml(app.contentRating || "")}</div>
        <p class="tagline">${escapeHtml(app.tagline)}</p>
        <div class="actions">${storeButtons.join("")}</div>
      </div>
    </div>

    ${screenshots ? `<div class="screens">${screenshots}</div>` : ""}

    <div class="about-app">
      <h2>About this app</h2>
      <p>${escapeHtml(app.description)}</p>
    </div>

    <div class="info-row">
      <div class="item">
        <div class="label">Developer</div>
        <div class="value">Android Trail</div>
      </div>
      <div class="item">
        <div class="label">Category</div>
        <div class="value">${escapeHtml(app.category)}</div>
      </div>
      <div class="item">
        <div class="label">Content rating</div>
        <div class="value">${escapeHtml(app.contentRating || "—")}</div>
      </div>
      ${app.privacyPolicyUrl ? `
      <div class="item">
        <div class="label">Privacy policy</div>
        <div class="value"><a href="${escapeHtml(app.privacyPolicyUrl)}" target="_blank" rel="noopener">View policy</a></div>
      </div>` : ""}
    </div>

    <a class="back-link" href="index.html">&larr; Back to all apps</a>
  `;
}
