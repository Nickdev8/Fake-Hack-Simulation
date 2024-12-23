using System;
using System.Threading;

class Program
{
    
    static void Main(string[] args)
    {
        Console.Title = "Hack Simulator 2024";
        Console.ForegroundColor = ConsoleColor.Green;

        SimulateStartup();
        SimulateHackingProcess();
        ShowFunnyEnding();
    }

    static void SimulateStartup()
    {
        string[] startupMessages = {
            "Initializing secure connection...",
            "Bypassing firewall...",
            "Spoofing MAC address...",
            "Connecting to dark web...",
            "Decrypting SSL channels..."
        };
        
        Random rnd = new Random();
        int speed = rnd.Next(1, 60);

        foreach (var message in startupMessages)
        {
            Random rand = new Random();

            Console.WriteLine(message);
            Thread.Sleep(1500 - rand.Next(0,1400) / speed);  // Simulate delay
        }
        Console.WriteLine("\nConnection established...");
    }

    static void SimulateHackingProcess()
    {
        for (int i = 0; i < 15; i++)
        {
            Random rand = new Random();
            string ip = $"192.168.{rand.Next(0, 255)}.{rand.Next(1, 255)}";
            Console.WriteLine($"Accessing node at {ip}... Success");
            SimulateLoadingBar();
        }
    }

    static void SimulateLoadingBar()
    {
        Random rand = new Random();
        int speed = rand.Next(1, 60);
        int loadLength = 30;
        Console.Write("[");
        for (int i = 0; i < loadLength; i++)
        {
            Random rnd = new Random();
            
            Console.Write("#");
            Thread.Sleep(((500 - (i /30*499)) / speed));  // Simulate loading speed
        }
        Console.WriteLine("] 100%");
    }

    static void ShowFunnyEnding()
    {
        Console.WriteLine("\nAccess granted to the mainframe!");
        Thread.Sleep(2000);
        Console.ForegroundColor = ConsoleColor.Red;
        Console.WriteLine("WARNING! Virus detected...");
        Thread.Sleep(2000);
        Console.WriteLine("You've been hacked... BY YOURSELF!");
        Thread.Sleep(2000);
        Console.ForegroundColor = ConsoleColor.White;
        Console.WriteLine("JK this is all fake.");
        Thread.Sleep(400);
        Console.WriteLine("pls don't sue me...");
        Thread.Sleep(400);
    }
}