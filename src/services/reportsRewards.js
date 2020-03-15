class ReportsRewards {

    constructor(provider, approved, hasSolution) {
        this.provider = provider;
        this.approved = approved;
        this.hasSolution = hasSolution;
    }

    getScore() {
        switch (this.provider) {
            case 'wiki interna':
                if (this.approved === true) {
                    if (this.hasSolution === true) {
                        return getScoreApprovedReportHasSolutionWikiInterna();
                    }
                    return getScoreApprovedReportWikiInterna();
                }
            case 'wiki externa':
                if (this.approved === true) {
                    if (this.hasSolution === true) {
                        return getScoreApprovedReportHasSolutionWikiExterna();
                    }
                    return getScoreApprovedReportWikiExterna();
                }
            default:
                return null;
        }
    }

    getScoreApprovedReportWikiInterna() {
        return 50;
    }

    getScoreApprovedReportHasSolutionWikiInterna() {
        return 70;
    }

    getScoreApprovedReportWikiExterna() {
        return 60;
    }

    getScoreApprovedReportHasSolutionWikiExterna() {
        return 80;
    }
}

module.exports = ReportsRewards;