# Streaming

### ~ hint

Streaming is an optional feature and may not be enabled in this editor.

### ~

The PXT parses the log entry for numerical data. When it detects a data stream, it automatically starts 
collecting and aggregating it. The streamed data can then be download to a file or uploaded to the cloud (optional).

## Before starting... #setup

Make sure you follow the instructions on [how to setup a serial connection](/device/serial) with the @boardname@. 

## A typical scenario #example

A common scenario is to chart some sensor data, such as the acceleration, and analyse it in the editor. 
For example, run this code on your @boardname@.

```blocks
basic.forever(() => {
   led.plotBarGraph(input.acceleration(Dimension.X), 0);
});
```

If your serial connection is working, you will start to see a chart representing that acceleration ``x`` value read from the @boardname@.
Each time ``led.plotBarGraph`` is called, the value is also written to the serial output. The log view automatically detects 
that there is a data stream and displays a graph.

## Local download

The log view will automatically start to collect and organize the data it detects. Simply click on the log view to open the various options
to export the data. The simplest option is to download the data as a **CSV file**. This file can easily be opened in programs like Office Excel.

## Cloud upload via Azure

In the data export dialog, there is another option to upload the data to the Azure cloud. This allows to upload small amounts of data without any kind setup. The data can be accessed via web services or directly from Office Excel.

### ~ hint

The data is stored in the cloud temporarily and might be deleted at any time. Streams are designed to provide an easy way to share data but should not be relied on for long term storage.

### ~

