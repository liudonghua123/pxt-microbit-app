# Troubleshooting downloads with WebUSB

### ~ avatar

Having issues pairing your @boardname@ with [WebUSB](/device/usb/webusb)? Let's try to figure out why!

### ~

## Step 1: Check your cable

Make sure that your @boardname@ is connected to your computer with a micro USB cable. For example, in Windows Explorer you should see a **MICROBIT** drive appear when it's connected. 

![MICROBIT drive](/static/mb/device/windows-microbit-drive.png)

**If you can see the MICROBIT drive go to step 2**.

If you can't see the drive:

* Make sure that the USB cable is working.
>Does the cable work on another computer? If not, find a different cable to use. Some cables may only provide a power connection and don't actually transfer data.
* Try another USB port on your computer.

Is the cable good but you still can't see the **MICROBIT** drive? Hmm, you might have a problem with your @boardname@. Try the additional steps described in the [fault finding](https://support.microbit.org/support/solutions/articles/19000024000-fault-finding-with-a-micro-bit) page at microbit.org. If this doesn't help, you can create a [support ticket](https://support.microbit.org/support/tickets/new) to notify the Micro:bit Foundation of the problem. **Skip the remaining troubleshooting steps**.

## Step 2: Check your firmware version

If your downloads still aren't working, it's possible that the firmware version on the @boardname@ needs an update. Let's check:

### 1. Go to the MICROBIT drive

Navigate to the **MICROBIT** drive in the computer's File Explorer.

### 2. Open the DETAILS.TXT file

Look for the **DETAILS.TXT** file and open it.

![](/static/mb/device/mb-drive-contents.jpg)

### 3. Find the firmware version number 

Look for a line in the file that says the version number. It should say **Version**:

![Firmware version number in DETAILS.TXT](/static/mb/device/details-txt.jpg)

or **Interface Version**:

![Interface version number in DETAILS.TXT](/static/mb/device/details-243.png)

If the version is **0234**, **0241**, **0243** you **NEED** to update the [firmware](/device/firmware) on your @boardname@. Go to **Step 3** and follow the upgrade instructions.

If the version is **0249**, **0250** or higher, **you have the right firmware** go to step **4**. 

## Step 3: Upgrade the firmware

### 1. Put your @boardname@ into **MAINTENANCE Mode**

To do this, unplug the USB cable from the @boardname@ and then reconnect the USB cable while you hold down the reset button. Once you insert the cable, you can release the reset button. You should now see a **MAINTENANCE** drive instead of the **MICROBIT** drive like before. Also, a yellow LED light will stay on next to the reset button.

![MAINTENANCE gesture](/static/mb/device/maintenance.gif)

### 2. Download the firmware file

Download the **[firmware .hex](https://microbit.org/guide/firmware/)** file.

### 3. Transfer to the MAINTENANCE drive

Drag and drop that file onto the **MAINTENANCE** drive.

### 4. Look for the flashing LED

The yellow LED will flash while the `HEX` file is copying. When the copy finishes, the LED will go off and the @boardname@ resets. The **MAINTENANCE** drive now changes back to **MICROBIT**.

### 5. Upgrade complete

The upgrade is complete! You can open the **DETAILS.TXT** file to check and see that the firmware version changed to the match the version of the `HEX` file you copied.

### ~hint

#### Firmware guide

If you want to know more about connecting the board, MAINTENANCE Mode, and upgrading the firmware, read about it in the [Firmware guide](https://microbit.org/guide/firmware/).

### ~

## Step 4: Check your browser version

WebUSB is a fairly new feature and may require you to update your browser. Check that your browser version matches one of those in the table below.

Browser versions for Android, Chrome OS, Linux, macOS, and Windows 10, 11:

| Browser | Version |
| - | - |
| Chrome | 61+ |
| Edge | 79+ |
| Safari | Not supported |

<br/>
For other browsers, see the supported versions in the **[Can I use?](https://caniuse.com/?search=webusb)** table for WebUSB.

## Step 5: Pair device

Once you've updated the firmware, open the **Chrome Browser**, go to the editor and click on **Pair Device** in the gearwheel menu.
See [WebUSB](/device/usb/webusb) for pairing instructions.

Enjoy fast downloads!

