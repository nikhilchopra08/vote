import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
import Time "mo:base/Time";
import Float "mo:base/Float";
import Text "mo:base/Text";

actor vote {

  stable var PlayerA = 0;
  stable var playerB = 0;
  stable var playerC = 0;

    Debug.print("votes of A are :" # Nat.toText(PlayerA));
    Debug.print("votes of B are :" # Nat.toText(playerB));
    Debug.print("votes of C are :" # Nat.toText(playerC));

  public func VoteA() {
    PlayerA := PlayerA + 1;
    playerB := playerB;
    playerC := playerC;
    Debug.print("votes of A are :" # Nat.toText(PlayerA));
    Debug.print("votes of B are :" # Nat.toText(playerB));
    Debug.print("votes of C are :" # Nat.toText(playerC));
  };

  public func VoteB() {
    PlayerA := PlayerA;
    playerB := playerB + 1;
    playerC := playerC;
    Debug.print("votes of A are :" # Nat.toText(PlayerA));
    Debug.print("votes of B are :" # Nat.toText(playerB));
    Debug.print("votes of C are :" # Nat.toText(playerC));
  };

  public func VoteC() : () {
    PlayerA := PlayerA;
    playerB := playerB;
    playerC := playerC + 1;
    Debug.print("votes of A are :" # Nat.toText(PlayerA));
    Debug.print("votes of B are :" # Nat.toText(playerB));
    Debug.print("votes of C are :" # Nat.toText(playerC));
  };
};
