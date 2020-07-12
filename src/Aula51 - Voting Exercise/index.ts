type VotingOption = {
  numberOfVotes: number;
  option: string;
};

export class Voting {
  private _votingOptions: VotingOption[] = [];
  constructor(public details: string) {}

  addVotingOption(votingOption: VotingOption): void {
    this._votingOptions.push(votingOption);
  }

  vote(votingIndex: number): void {
    if (!this._votingOptions[votingIndex]) return;
    this._votingOptions[votingIndex].numberOfVotes += 1;
  }

  get votingOptions(): VotingOption[] {
    return this._votingOptions;
  }
}

export class VotingApp {
  private votings: Voting[] = [];

  addVoting(voting: Voting): void {
    this.votings.push(voting);
  }

  showVotings(): void {
    for (const voting of this.votings) {
      console.log(voting.details);
      for (const votingOption of voting.votingOptions) {
        console.log(votingOption.option, votingOption.numberOfVotes);
      }
      console.log('##########');
      console.log('');
    }
  }
}

const voting = new Voting('Qual a sua linguagem de programação favorita?');
voting.addVotingOption({ option: 'Python', numberOfVotes: 0 });
voting.addVotingOption({ option: 'JavaScript', numberOfVotes: 0 });
voting.addVotingOption({ option: 'TypeScript', numberOfVotes: 0 });

voting.vote(1);
voting.vote(1);
voting.vote(0);
voting.vote(0);
voting.vote(2);
voting.vote(2);
voting.vote(2);

const voting2 = new Voting('Qual a sua cor favorita?');
voting2.addVotingOption({ option: 'Vermelho', numberOfVotes: 0 });
voting2.addVotingOption({ option: 'Verde', numberOfVotes: 0 });
voting2.addVotingOption({ option: 'Azul', numberOfVotes: 0 });
voting2.addVotingOption({ option: 'Roxo', numberOfVotes: 0 });
voting2.addVotingOption({ option: 'Marrom', numberOfVotes: 0 });

voting2.vote(1);
voting2.vote(2);
voting2.vote(0);
voting2.vote(0);
voting2.vote(2);
voting2.vote(2);
voting2.vote(0);
voting2.vote(3);
voting2.vote(4);
voting2.vote(4);

const votingApp = new VotingApp();
votingApp.addVoting(voting);
votingApp.addVoting(voting2);
votingApp.showVotings();
