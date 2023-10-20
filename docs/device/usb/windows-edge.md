# Transferring from Microsoft Edge on Windows

How to compile, transfer, and run a program on your micro:bit with **Microsoft Edge**.

While you're writing and testing your programs, you'll mostly be [running them
in the simulator](/device/simulator), but once you've finished your program you
can **compile** it and run it on your micro:bit.

## Transfer using a WebUSB connection

With Microsoft Edge (version 79 and newer), you can transfer your program to the @boardname@ with a single click. If your browser supports WebUSB, you can use the **one-click download** feature to send your programs to the @boardname@. See the [WebUSB](/device/usb/webusb) page to learn how to pair your @boardname@ with a computer and transfer your programs with a single click.

## Downloading your program as file

The basic steps are:

1. Connect your @boardname@ to your computer with a USB cable (use an A-Male to Micro USB cable)
2. Click **Download** to download the `.hex` file
3. Click the **Save As** button in the bottom bar and save the `.hex` file into the MICROBIT drive

### Step 1: Connect your micro:bit to your computer

First, connect the micro:bit:

1. Connect the small end of the USB cable to the micro USB port on your micro:bit.

2. Connect the other end of the USB cable to a USB port on your computer.

Your computer should recognise your micro:bit as a new drive. On computers
running Windows, `MICROBIT` appears as a drive under Devices and drives. On a Mac
it appears as a new drive under Devices.

![](/static/mb/device/usb-windows-device.jpg)

### Step 2: Download your program

1. Open your project on @homeurl@
2. Click **Download**
3. When prompted, choose to **save** the compiled file onto your computer. The
   prompt will be different depending on which browser you are using, or
   whether you are using a Windows computer or a Mac

A message will appear at the bottom of the browser asking what you want to do
with the file. 

4. Click **Save As**

![Save download file dialog](/static/mb/device/usb/save-as-edge.gif)

5. Save the ``.hex`` file into the **MICROBIT** drive

![Save hex file to MICROBIT drive](/static/mb/device/usb/save-as-windows.png)

## Step 3: Transfer the file to your micro:bit

* The LED on the back of your micro:bit flashes during the transfer (which 
    should only take a few seconds).
* Once transferred, the code will run automatically on your @boardname@. To rerun
   your program, press the reset button on the back of your @boardname@. The reset 
   button automatically runs the newest file on the micro:bit.

By copying the script onto the `MICROBIT` drive, you have programmed it into the
flash memory on the micro:bit, which means even after you unplug the micro:bit,
your program will still run if the micro:bit is powered by battery.

### ~hint

#### Transfer problems?

Transfer not working? See some [troubleshooting tips](/device/usb/troubleshoot).

### ~
