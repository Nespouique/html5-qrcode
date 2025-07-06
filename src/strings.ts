/**
 * @fileoverview
 * Strings used by {@class Html5Qrcode} & {@class Html5QrcodeScanner}
 * 
 * @author mebjas <minhazav@gmail.com>
 * 
 * The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED
 * http://www.denso-wave.com/qrcode/faqpatent-e.html
 */

/**
 * Strings used in {@class Html5Qrcode}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeStrings {

    public static codeParseError(exception: any): string {
        return `QR code parse error, error = ${exception}`;
    }

    public static errorGettingUserMedia(error: any): string {
        return `Error getting userMedia, error = ${error}`;
    }

    public static onlyDeviceSupportedError(): string {
        return "The device doesn't support navigator.mediaDevices , only "
        + "supported cameraIdOrConfig in this case is deviceId parameter "
        + "(string).";
    }

    public static cameraStreamingNotSupported(): string {
        return "Camera streaming not supported by the browser.";
    }

    public static unableToQuerySupportedDevices(): string {
        return "Unable to query supported devices, unknown error.";
    }

    public static insecureContextCameraQueryError(): string {
        return "Camera access is only supported in secure context like https "
        + "or localhost.";
    }

    public static scannerPaused(): string {
        return "Scanner paused";
    }
}

/**
 * Strings used in {@class Html5QrcodeScanner}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeScannerStrings {

    public static scanningStatus(): string {
        return "Scanning";
    }

    public static idleStatus(): string {
        return "Idle";
    }

    public static errorStatus(): string {
        return "Error";
    }

    public static permissionStatus(): string {
        return "Permission";
    }

    public static noCameraFoundErrorStatus(): string {
        return "No Cameras";
    }

    public static lastMatch(decodedText: string): string {
        return `Last Match: ${decodedText}`;
    }

    public static codeScannerTitle(): string {
        return "Code Scanner";
    }    public static cameraPermissionTitle(): string {
        return "📷 Autoriser la caméra";
    }

    public static cameraPermissionRequesting(): string {
        return "Demande d'autorisation de la caméra...";
    }

    public static noCameraFound(): string {
        return "Aucune caméra trouvée";
    }

    public static scanButtonStopScanningText(): string {
        return "⏹️ Arrêter le scan";
    }

    public static scanButtonStartScanningText(): string {
        return "🚀 Démarrer le scan";
    }

    public static torchOnButton(): string {
        return "Switch On Torch";
    }

    public static torchOffButton(): string {
        return "Switch Off Torch";
    }

    public static torchOnFailedMessage(): string {
        return "Failed to turn on torch";
    }

    public static torchOffFailedMessage(): string {
        return "Failed to turn off torch";
    }    public static scanButtonScanningStarting(): string {
        return "Lancement de la caméra...";
    }

    /**
     * Text to show when camera scan is selected.
     * 
     * This will be used to switch to file based scanning.
     */
    public static textIfCameraScanSelected(): string {
        return "Scanner un fichier";
    }

    /**
     * Text to show when file based scan is selected.
     * 
     * This will be used to switch to camera based scanning.
     */
    public static textIfFileScanSelected(): string {
        return "Scanner avec la caméra";
    }

    public static selectCamera(): string {
        return "📷 Sélectionner une caméra";
    }

    public static fileSelectionChooseImage(): string {
        return "🖼️ Choisir une image";
    }    public static fileSelectionChooseAnother(): string {
        return "Choisir une autre image";
    }

    public static fileSelectionNoImageSelected(): string {
        return "";
    }

    /** Prefix to be given to anonymous cameras. */
    public static anonymousCameraPrefix(): string {
        return "Caméra";
    }

    public static dragAndDropMessage(): string {
        return "Ou déposer une image pour scanner";
    }

    public static dragAndDropMessageOnlyImages(): string {
        return "Ou déposer une image pour scanner (autres fichiers non supportés)";
    }

    /** Value for zoom. */
    public static zoom(): string {
        return "zoom";
    }    public static loadingImage(): string {
        return "Chargement de l'image...";
    }

    public static cameraScanAltText(): string {
        return "Scan basé sur la caméra";
    }

    public static fileScanAltText(): string {
        return "Scan basé sur fichier";
    }
}

/** Strings used in {@class LibraryInfoDiv} */
export class LibraryInfoStrings {

    public static poweredBy(): string {
        return "Powered by ";
    }

    public static reportIssues(): string {
        return "Report issues";
    }
}
