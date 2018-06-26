using System;

public class Program
{
	public static void Main()
	{
		Console.WriteLine("Would you like to play the higher/lower game (y/n)?");
    string game = Console.ReadLine();
   // string output = "is your guess higher or lower than";

    int lowCheck=0;
	int highCheck = 100;

    if(game == "y")
    {

     string guess = "";

   int modifier =(highCheck+lowCheck)/2;
		 Console.WriteLine("is it :");
    Console.WriteLine(modifier);
      while(guess != "correct")
      {
	  Console.WriteLine("if correct type correct, otherwise say higher, or lower");
	  guess = Console.ReadLine();
        if (guess == "higher")
        {


            lowCheck=modifier;

        }
        else if (guess == "lower")
        {

         highCheck=modifier;
        }
		  Console.WriteLine("is it :");
		       modifier =(highCheck+lowCheck)/2;
            Console.WriteLine(modifier);


	  }
  Console.WriteLine("Thank you your number is:"+modifier);
	}
      else
      {
        Console.WriteLine("sad");
      }

    }
	}
