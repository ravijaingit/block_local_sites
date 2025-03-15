# Local Site Blocker

## Overview
Local Site Blocker is a Chrome extension that allows you to block specific websites without interacting with the internet. The extension operates entirely on your local system, ensuring privacy and control over your browsing experience.

## Features
- Blocks websites locally without any internet interaction.
- Users can specify which sites to block via an options page.
- Uses Chrome's `declarativeNetRequest` API for efficient and reliable blocking.
- Easy to configure and lightweight.

## Installation Guide
1. Download the extension files and save them in a folder (e.g., `local_site_blocker`).
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the folder containing the extension files.
5. The extension will now be installed and active.

## How to Use
1. Click on **Local Site Blocker** in the Chrome Extensions menu or go to `chrome://extensions/`.
2. Click on **Details → Extension Options** to open the settings page.
3. Enter the websites you want to block, one per line (e.g., `instagram.com`, `lichess.org`).
4. Click **Save**.
5. The listed websites will now be blocked immediately.

## How It Works
- The extension retrieves the list of blocked sites from local storage.
- When you try to access a blocked website, Chrome’s **declarativeNetRequest** API prevents the page from loading.
- The extension does not require an internet connection and does not collect or send any data.

## Uninstallation
To remove the extension:
1. Go to `chrome://extensions/`.
2. Locate **Local Site Blocker**.
3. Click **Remove**.

## Known Limitations
- Only blocks websites at the domain level (does not filter sub-pages).
- Requires reloading Chrome after adding/removing sites for changes to take effect immediately.

## License
This extension is open-source and can be modified as needed.

