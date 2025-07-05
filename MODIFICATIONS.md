# Modifications appliquées au fork html5-qrcode

Ce document résume les modifications apportées pour intégrer les styles personnalisés de l'application Nespouique/library-ihm directement dans le code source de html5-qrcode.

## Modifications principales

### 1. Styles CSS personnalisés (`src/html5-qrcode-scanner.ts`)

- **Nouvelle méthode `injectCustomScannerStyles()`** : Injecte les styles CSS personnalisés pour utiliser les variables CSS du thème
- **Bordures et couleurs** : Utilisation de `hsl(var(--border))`, `hsl(var(--background))`, `hsl(var(--foreground))`, `hsl(var(--primary))`, etc.
- **Masquage des éléments indésirables** : Les éléments "Powered by ScanApp" sont complètement masqués
- **Styles des boutons** : Applique le thème personnalisé avec hover et disabled states

### 2. Traduction française (`src/strings.ts`)

Tous les textes de l'interface ont été traduits en français :

- `"Request Camera Permissions"` → `"📷 Autoriser la caméra"`
- `"Start Scanning"` → `"🚀 Démarrer le scan"`
- `"Stop Scanning"` → `"⏹️ Arrêter le scan"`
- `"Select Camera"` → `"📷 Sélectionner une caméra"`
- `"Choose Image"` → `"🖼️ Choisir une image"`
- `"Or drop an image to scan"` → `"Ou déposer une image pour scanner"`
- Etc.

### 3. Masquage des éléments indésirables (`src/ui.ts`)

- **LibraryInfoIcon** : Complètement masqué avec `display: none` et `visibility: hidden`
- **LibraryInfoDiv** : Également masqué pour éviter d'afficher "Powered by ScanApp"

### 4. Styles des composants UI

#### File Selection UI (`src/ui/scanner/file-selection-ui.ts`)
- Bordures utilisant les variables CSS du thème
- Couleurs cohérentes avec le thème
- Border radius amélioré (8px)

#### Camera Zoom UI (`src/ui/scanner/camera-zoom-ui.ts`)
- Slider utilisant les couleurs du thème
- Texte avec couleur et taille personnalisées

#### Camera Selection UI (`src/ui/scanner/camera-selection-ui.ts`)
- Couleurs du texte utilisant les variables CSS

### 5. Styles CSS injectés

Les styles suivants sont automatiquement injectés :

```css
/* Boutons */
.html5-qrcode-element button {
    background: hsl(var(--primary)) !important;
    color: hsl(var(--primary-foreground)) !important;
    border: 1px solid hsl(var(--border)) !important;
    border-radius: 6px !important;
    padding: 8px 16px !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    transition: all 0.2s !important;
}

/* Select de caméra */
.html5-qrcode-element select {
    background: hsl(var(--background)) !important;
    border: 1px solid hsl(var(--border)) !important;
    border-radius: 6px !important;
    color: hsl(var(--foreground)) !important;
}

/* Masquage éléments indésirables */
.html5-qrcode-element div[style*="position: absolute"][style*="top"][style*="right"] {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
}
```

## Variables CSS requises

Pour que les styles fonctionnent correctement, votre application doit définir ces variables CSS :

```css
:root {
    --background: 220 23% 97%;
    --foreground: 220 9% 15%;
    --primary: 262 70% 55%;
    --primary-foreground: 210 40% 98%;
    --border: 220 13% 88%;
}
```

## Utilisation

1. Compilez le projet : `npm run build-windows` (sur Windows)
2. Utilisez le fichier généré `dist/html5-qrcode.min.js`
3. Assurez-vous d'avoir les variables CSS définies dans votre thème
4. Le scanner utilisera automatiquement les styles personnalisés et les textes français

## Test

Un fichier de test `examples/test-custom-styles.html` a été créé pour vérifier les modifications.

## Avantages

- **Plus de surcharge CSS** : Les styles sont intégrés directement dans le code
- **Cohérence du thème** : Utilise les mêmes variables CSS que votre application
- **Interface française** : Tous les textes sont traduits
- **Interface épurée** : Les éléments indésirables sont masqués
- **Maintenance simplifiée** : Plus besoin de maintenir des styles CSS séparés
